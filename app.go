package main

import (
	"context"
	"fmt"
	"os"
	"os/user"
	"runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// DeviceInfo represents system and device details
type DeviceInfo struct {
	OS       string `json:"os"`
	Arch     string `json:"arch"`
	CPUs     int    `json:"cpus"`
	Hostname string `json:"hostname"`
	Username string `json:"username"`
}

// GetDeviceInfo returns details about the host operating system and device
func (a *App) GetDeviceInfo() DeviceInfo {
	hostname, err := os.Hostname()
	if err != nil {
		hostname = "Unknown"
	}

	username := "Unknown"
	currUser, err := user.Current()
	if err == nil {
		username = currUser.Username
	}

	return DeviceInfo{
		OS:       runtime.GOOS,
		Arch:     runtime.GOARCH,
		CPUs:     runtime.NumCPU(),
		Hostname: hostname,
		Username: username,
	}
}

