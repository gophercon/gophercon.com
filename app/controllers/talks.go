package controllers

import "github.com/robfig/revel"

type Talks struct {
	*revel.Controller
}

func (c Talks) Index() revel.Result {
	return c.Render()
}

func (c Talks) Submit() revel.Result {
	return c.Render()
}
