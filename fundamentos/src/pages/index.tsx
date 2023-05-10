import { Icon24Hours } from "@tabler/icons-react"

export default function Home() {
    return (
        <div
            className={`
                flex flex-col items-center justify-center h-screen
                bg-gray-100
            `}
        >
            <Icon24Hours size={100} strokeWidth={1} />
            <span>Fundamentos</span>
        </div>
    )
}