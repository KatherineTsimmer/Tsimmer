const formElement = document.getElementById('MyForm');
		formElement.addEventListener('submit', (e) => {
			e.preventDefault(); 
			const formData = new FormData(formElement);
			const MyString = formData.get('MyString'); 
			const WordNumber = formData.get('WordNumber'); 
			document.write(WordN(MyString, WordNumber)); 
		});
		
function WordN(AnyString, n) {
    let Words = AnyString.trim().split(' ');
        if (Words.length < n) {
 return '';
    }
        else if (Words.length > n) {
 return Words[n-1];
    }	
}


