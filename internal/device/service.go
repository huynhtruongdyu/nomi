package device

import (
	"os"
	"os/user"
	"runtime"
)

type Info struct {
	OS       string `json:"os"`
	Arch     string `json:"arch"`
	CPUs     int    `json:"cpus"`
	Hostname string `json:"hostname"`
	Username string `json:"username"`
}

func GetDeviceInfo() Info {
	hostname, err := os.Hostname()
	if err != nil {
		hostname = "Unknown"
	}

	username := "Unknown"
	currUser, err := user.Current()
	if err == nil {
		username = currUser.Username
	}

	return Info{
		OS:       runtime.GOOS,
		Arch:     runtime.GOARCH,
		CPUs:     runtime.NumCPU(),
		Hostname: hostname,
		Username: username,
	}
}
