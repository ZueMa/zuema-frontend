
export function addCookie(user_id, user_type) {
    console.log(user_id);
    return {
        type: 'COOKIE',
        user_id: user_id,
        user_type: user_type
    };
};

