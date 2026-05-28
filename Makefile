.DEFAULT_GOAL := build

.PHONY: run build

run:
	wails dev

build:
	wails build -clean