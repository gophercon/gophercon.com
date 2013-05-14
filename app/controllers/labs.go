package controllers

import "github.com/robfig/revel"

type Labs struct {
	*revel.Controller
}

func (c Labs) Index() revel.Result {
	return c.Render()
}

func (c Labs) Submit() revel.Result {
	return c.Render()
}
