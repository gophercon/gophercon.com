package controllers

import (
<<<<<<< HEAD
	//	"fmt"
=======
>>>>>>> 5e297d1026dbf4a7819e5612d08d6e1b64d38c9a
	"github.com/robfig/revel"
	//"gophercon.com/app/models"
)

type User struct {
	*revel.Controller
}

func (c User) Index() revel.Result {
	return c.Render()
}

/*
func (c User) HandleSubmit(user *models.User) revel.Result {
/*	user.Validate(c.Validation)

	// Handle errors
	if c.Validation.HasErrors() {
		c.Validation.Keep()
		c.FlashParams()
		return c.Redirect(User.Index)
	}

	// Save the user here
	err := user.Save()

	fmt.Println(err)
*/
	// Ok, display the created user
	return c.Render(user)
}
*/
