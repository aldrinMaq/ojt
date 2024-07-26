import {ref} from "vue";

export const getScreenSize = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
        return 'xl';
    } else if (width >= 992) {
        return 'lg';
    } else if (width >= 768) {
        return 'md';
    } else {
        return 'sm';
    }
};

// Reactive property to hold the current screen size
export const screenSize = ref(getScreenSize());

// Function to update the screen size
export const updateScreenSize = () => {
    screenSize.value = getScreenSize();
};