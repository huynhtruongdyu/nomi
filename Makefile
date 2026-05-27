.DEFAULT_GOAL := build

.PHONY: dev build

dev:
	wails dev

build:
	wails build -clean