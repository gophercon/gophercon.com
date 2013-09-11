// GENERATED CODE - DO NOT EDIT
package routes

import "github.com/robfig/revel"


type tApplication struct {}
var Application tApplication


func (_ tApplication) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Application.Index", args).Url
}


type tLabs struct {}
var Labs tLabs


func (_ tLabs) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Labs.Index", args).Url
}

func (_ tLabs) Submit(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Labs.Submit", args).Url
}


type tSponsors struct {}
var Sponsors tSponsors


func (_ tSponsors) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Sponsors.Index", args).Url
}

func (_ tSponsors) Submit(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Sponsors.Submit", args).Url
}


type tTalks struct {}
var Talks tTalks


func (_ tTalks) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Talks.Index", args).Url
}

func (_ tTalks) Submit(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Talks.Submit", args).Url
}


type tUser struct {}
var User tUser


func (_ tUser) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("User.Index", args).Url
}


type tStatic struct {}
var Static tStatic


func (_ tStatic) Serve(
		prefix string,
		filepath string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "prefix", prefix)
	revel.Unbind(args, "filepath", filepath)
	return revel.MainRouter.Reverse("Static.Serve", args).Url
}

func (_ tStatic) ServeModule(
		moduleName string,
		prefix string,
		filepath string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "moduleName", moduleName)
	revel.Unbind(args, "prefix", prefix)
	revel.Unbind(args, "filepath", filepath)
	return revel.MainRouter.Reverse("Static.ServeModule", args).Url
}


type tTestRunner struct {}
var TestRunner tTestRunner


func (_ tTestRunner) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("TestRunner.Index", args).Url
}

func (_ tTestRunner) Run(
		suite string,
		test string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "suite", suite)
	revel.Unbind(args, "test", test)
	return revel.MainRouter.Reverse("TestRunner.Run", args).Url
}

func (_ tTestRunner) List(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("TestRunner.List", args).Url
}


