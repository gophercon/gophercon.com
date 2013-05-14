package controllers

import "github.com/robfig/revel"

type Sponsors struct {
	*revel.Controller
}

func (c Sponsors) Index() revel.Result {
	return c.Render()
}

func (c Sponsors) Submit() revel.Result {
	return c.Render()
}
