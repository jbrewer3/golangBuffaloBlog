// import EditorJS from '@editorjs/editorjs';
// import CodeTool from '@editorjs/code';
// import Header from '@editorjs/header';
// import ImageTool from '@editorjs/image'
// import List from '@editorjs/list';
// import LinkTool from '@editorjs/link';

// const editor = new EditorJS({
//      holder: 'editorjs',

//      tools: {
//         header: {
//             class: Header,
//             inlineToobar: ['link']
//         },
//         list: {
//             class: List,
//             inlineToobar: true
//         },
//         code: {
//             class: CodeTool
//         },
//         image: {
//             class: ImageTool,
//             config: {
//                 enpoints: {
//                     byFile: 'http://localhost:8008/uploadFile',
//                     byUrl: 'http://localhost:8008/fetchUrl'
//                 }
//             }
//         },
//         linkTool: {
//             class: LinkTool,
//             config: {
//               endpoint: 'http://localhost:8008/fetchUrl' // Your backend endpoint for url data fetching,
//             }
//         },
//     }
// )


import EditorJS from '@editorjs/editorjs';
import CodeTool from '@editorjs/code';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image'
import List from '@editorjs/list';
import LinkTool from '@editorjs/link';

const editor = new EditorJS({


	holder: 'editorjs',
	tools: {
		header: {
			class: Header,
			inlineToobar: ['link']
		},
		list: {
			class: List,
			inlineToobar: true
		},
		code: {
			class: CodeTool
		},
		image: {
			class: ImageTool,
			config: {
				enpoints: {
					byFile: 'http://localhost:8008/uploadFile',
					byUrl: 'http://localhost:8008/fetchUrl'
				}
			}
		},
		linkTool: {
			class: LinkTool,
			config: {
				endpoint: 'http://localhost:8008/fetchUrl' // Your backend endpoint for url data fetching,
			}
		},
	}

});       

let saveBtn = document.querySelector('button');

saveBtn.addEventListener('click', function() { 
    editor.save().then((outputData) => {
        console.log('Article date: ', outputData)
    });
})