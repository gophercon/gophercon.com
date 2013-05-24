package controllers

import (

	"github.com/robfig/revel"

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
