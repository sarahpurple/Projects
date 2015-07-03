

function imageClick(image) {

	var element = document.getElementById(image.id);
	if (element.classList.contains('selected')) {
		element.classList.remove('selected');
		RemoveFromSessionStorage(image.id);
	} else {
		element.className += ' selected';
		AddToSessionStorage(image.id);
	}

}

function AddToSessionStorage(imageId) {

	sessionStorage.setItem(imageId, true);
}

function RemoveFromSessionStorage(imageId) {
	sessionStorage.removeItem(imageId);
}
