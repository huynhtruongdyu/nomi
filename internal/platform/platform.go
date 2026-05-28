package platform

// Package platform abstracts OS-specific functionality (Windows/macOS/Linux).
// Use build tags (+build windows, darwin, linux) in files within this package
// to provide platform-appropriate implementations for notifications, file dialogs,
// system tray, shortcuts, etc.
