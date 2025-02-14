import React, { createContext, useState, useContext } from "react";

const EmissiveContext = createContext();

export const useEmissive = () => useContext(EmissiveContext);

export const EmissiveProvider = ({ children }) => {
	const [emissiveIntensity, setEmissiveIntensity] = useState(0.2);
	const [activeIsland, setActiveIsland] = useState(null);

	return (
		<EmissiveContext.Provider
			value={{
				emissiveIntensity,
				setEmissiveIntensity,
				activeIsland,
				setActiveIsland,
			}}
		>
			{children}
		</EmissiveContext.Provider>
	);
};
