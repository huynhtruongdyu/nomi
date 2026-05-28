.DEFAULT_GOAL := build

.PHONY: run build doctor

run:
	wails dev

build:
	wails build -clean

doctor:
	wails doctor