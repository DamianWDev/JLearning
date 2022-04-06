interface TitleProps {
    title: string;
}

export function Title({ title }: TitleProps) {

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
        </div>
    )
}
