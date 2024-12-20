import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import MarkdownPreview, { text } from "./MarkdownPreview";

function App() {
	const [postContent, setPostContent] = useState(text);

	return (
		<>
			<textarea
				id="editor"
				className="previewWindow"
				id="editor"
				value={postContent}
				onChange={(e) => setPostContent(e.target.value)}
			/>
			<br />
			<MarkdownPreview markdown={postContent} />
		</>
	);
}

export default App;
