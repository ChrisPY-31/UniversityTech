let pendingImage = null;

export const setPendingImage = (file) => { pendingImage = file; };
export const getPendingImage = () => pendingImage;
export const clearPendingImage = () => { pendingImage = null; };
