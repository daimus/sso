function fallbackCopyTextToClipboard(text : string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        alert("Text as been copied to the clipboard")
    } catch (err) {
        console.error('Fallback: unable to copy', err);
    }

    document.body.removeChild(textArea);
}
export function copyTextToClipboard(text : string) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        alert("Text has been copied to the clipboard")
    }, function(err) {
        console.error('Async: unable to copy: ', err);
    });
}