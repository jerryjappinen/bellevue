export default () => {

	if (window.document.selection && window.document.selection.empty) {
		window.document.selection.empty()

	} else if (window.getSelection) {
		window.getSelection().removeAllRanges()
	}

}
