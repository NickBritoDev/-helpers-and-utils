export const maskCPF = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
};
export const maskPhone = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4,5})(\d{4})\d*/, "$1-$2");
};
export const maskCEP = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
};
export const maskDate = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1");
};
export const maskOnlyLetters = (value) => {
    return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};
export const maskOnlyNumbers = (value) => {
    return value.replace(/\D/g, "");
};
