package models

import "github.com/robfig/revel"
import "database/sql"
import _ "github.com/go-sql-driver/mysql"
import "fmt"
import "github.com/pmylund/go-hmaccrypt"
import "crypto/sha512"

const Pepper = "99BottlesOfB33rOnTh3Wall98B0ttlesOfB33r"

type User struct {
	Id              int
	FirstName       string
	LastName        string
	Password        string
	PasswordConfirm string
	Email           string
	EmailConfirm    string
}

func (user *User) Validate(v *revel.Validation) {
	v.Required(user.FirstName)
	v.Required(user.LastName)
	v.Required(user.Password)
	v.MinSize(user.Password, 6)
	v.Required(user.PasswordConfirm)
	v.Required(user.PasswordConfirm == user.Password).
		Message("The passwords do not match.")
	v.Required(user.Email)
	v.Email(user.Email)
	v.Required(user.EmailConfirm)
	v.Required(user.EmailConfirm == user.Email).
		Message("The email addresses do not match")
}

func (user *User) Save() error {
	db, e := sql.Open("mysql", "gophercon:gophercon@/gophercon?charset=utf8")
	if e != nil {
		fmt.Println(e)
		return e
	}

	hmac := hmaccrypt.New(sha512.New, []byte(Pepper))

	crypted, e := hmac.Bcrypt([]byte(user.Password), 12)

	user.Password = string(crypted)

	result, e := db.Exec("insert into users(firstname,lastname,password,email) values (?, ?, ?,?)", user.FirstName, user.LastName, user.Password, user.Email)

	fmt.Println(result, e)

	return e
}

func (user *User) ValidatePassword(email, password string) (bool, error) {

	db, e := sql.Open("mysql", "gophercon:gophercon@/gophercon?charset=utf8")
	if e != nil {
		fmt.Println(e)
		return false, e
	}

	row := db.QueryRow("select password from users where Email=?", email)

	var dbpass string
	err := row.Scan(&dbpass)

	fmt.Println("Retrieved password:", dbpass)

	if err != nil {
		return false, err
	}

	hmac := hmaccrypt.New(sha512.New, []byte(Pepper))

	err = hmac.BcryptCompare([]byte(dbpass), []byte(password))
	fmt.Println("Compare error:", err)
	if err != nil {
		return false, err
	}
	return true, nil

}
