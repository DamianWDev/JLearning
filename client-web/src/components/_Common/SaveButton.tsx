import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
    color: "white",
    fontWeight: "bold",
    width: "100%",
}));

interface SaveButtonProps {
    handleOnClick: () => void
}

export function SaveButton({ handleOnClick }: SaveButtonProps) {
    return (
        <StyledButton
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOnClick}
        >
            SAVE
        </StyledButton>
    )
};