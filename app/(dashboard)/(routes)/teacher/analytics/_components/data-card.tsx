import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";

interface DataCardProps {
	value: number;
	label: string;
	shouldFormat?: boolean;
}

const DataCard = ({ value, label, shouldFormat }: DataCardProps) => {
	return (
		<Card>
			<CardHeader className="flex flex-row justify-between space-y-0 pb-2">
				<CardTitle className="text-xl font-md">{label}</CardTitle>
				<CardContent className="flex items-center justify-center">
					<div className="text-2xl font-bold flex items-center justify-center">
						{shouldFormat ? formatPrice(value) : value}
					</div>
				</CardContent>
			</CardHeader>
		</Card>
	);
};

export default DataCard;
