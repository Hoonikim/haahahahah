  const handleAddCommentErrorQ = err => {
    const newCommentInput = { content: newComment };
    if (err.response.status === 401) {
      const newAccessToken = err.response.headers.authorization;
      const newRefreshToken = err.response.headers.refresh;

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);

      axios
        .post(`/question/${questionId}/comment`, newCommentInput, {
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
            Refresh: `${newRefreshToken}`
          }
        })
        .then(() => {
          window.location.href = `/question/${questionId}`;
        })
        .catch(handleAddCommentErrorQ);
    }
  };
  const handleAddCommentErrorA = err => {
    const newCommentInput = { content: newComment };
    if (err.response.status === 401) {
      const newAccessToken = err.response.headers.authorization;
      const newRefreshToken = err.response.headers.refresh;

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);

      axios
        .post(
          `/question/${questionId}/answer/${answerId}/comment`,
          newCommentInput,
          {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
              Refresh: `${newRefreshToken}`
            }
          }
        )
        .then(() => {
          window.location.href = `/question/${questionId}`;
        })
        .catch(handleAddCommentErrorA);
    }
  };  