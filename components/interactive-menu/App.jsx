import React from "react";
import { EmissiveProvider } from "./EmissiveContext";
import { UI } from "./UI";
import { IslasScene2 } from "./IslasScene2";

function App() {
	return (
		<EmissiveProvider>
			<UI />
			<IslasScene2 />
		</EmissiveProvider>
	);
}

export default App;
