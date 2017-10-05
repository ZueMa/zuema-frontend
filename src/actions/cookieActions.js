
export function addCookie(user_id, user_type) {
    return {
        type: 'COOKIE',
        user_id: user_id,
        user_type: user_type
    };
};

