package main

import (
	"context"

	"nomi/internal/device"
	"nomi/internal/greeting"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) Greet(name string) string {
	return greeting.Greet(name)
}

func (a *App) GetDeviceInfo() device.Info {
	return device.GetDeviceInfo()
}

