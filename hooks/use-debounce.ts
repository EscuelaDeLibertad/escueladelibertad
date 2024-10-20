import { useEffect, useState } from "react";

//?Esto sirve para que el valor de la busqueda no se ejecute hasta que el usuario termine de escribir o al menos que se ejecute despues de cierto tiempo para evitar sobrecargar la base de datos

export function useDebounce<T>(value: T, delay?: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay || 500);

		return () => clearTimeout(timer);
	}, [value, delay]);

	return debouncedValue;
}
