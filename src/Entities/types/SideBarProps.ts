export type SideBarProps = {
    brandFilter: string[];
    handleFilters: (isChecked: boolean, brand: string) => void;
    clearFilters: () => void;
};