import React, { createContext, useContext, useState } from "react";

const BackgroundContext = createContext();

export function BackgroundProvider({ children }) {
	const [background, setBackground] = useState(0);

	return (
		<BackgroundContext.Provider value={{ background, setBackground }}>
			{children}
		</BackgroundContext.Provider>
	);
}

export function useBackground() {
	return useContext(BackgroundContext);
}
