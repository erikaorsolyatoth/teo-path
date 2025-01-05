declare global {
    interface Window {
        Calendly: {
            initPopupWidget(options: { url: string }): void;
            closePopupWidget(): void;
        };
    }
}

export {};
