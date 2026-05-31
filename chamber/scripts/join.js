document.addEventListener("DOMContentLoaded", () => {

    // Set timestamp safely
    const timestamp = document.getElementById("timestamp");
    if (timestamp) {
        timestamp.value = new Date().toISOString();
    }

    // Open dialogs
    document.querySelectorAll("[data-modal]").forEach(button => {
        button.addEventListener("click", () => {
            const modal = document.getElementById(button.dataset.modal);
            if (modal) modal.showModal();
        });
    });

    // Close dialogs
    document.querySelectorAll(".close-modal").forEach(button => {
        button.addEventListener("click", () => {
            button.closest("dialog")?.close();
        });
    });

});