import React, { useState, useEffect , useRef} from 'react';
import Navigation from '../../Templates/Navigation/Navigation';
import { fetchAllComments } from '../../api/commentsApi';
import { fontSize } from '../../util/theme';





const BlogScreen = () => {
  const styles = {
    dropdown: {
      position: 'relative',
      display: 'inline-block',
    },
    menu: {
      position: 'absolute',
      listStyleType: 'none',
      margin: '5px 0',
      padding: '30px',
      border: '1px solid grey',
      width: '150px',
      maxHeight: '200px',
      overflowY: 'auto',
    },
    li: {
      textAlign: 'center',
      listStyleType: 'none',
      borderBottom: '1px solid black',
      padding: '20px',
      fontSize: fontSize.normal,
      marginBottom: '10px',
      backgroundColor: '#f5f5f5',
      boxShadow: '5px 6px #888888',
    },
    commentList: {
      marginTop: '20px',
      listStyleType: 'none',
      backgroundColor: '#f5f5f5',
      padding: '20px',
    },
  };

  const [open, setOpen] = useState(false);
  const [isCommentOpen, setCommentOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setCommentOpen(false); // Zatvaramo komentare kada se ponovno klikne na dropdown
  };

  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedPostComments, setSelectedPostComments] = useState([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    let mount = true;

    fetchAllComments().then((allComments) => {
      if (mount) {
        setComments(allComments);
      }
    });

    return () => {
      mount = false;
    };
  }, []);

  useEffect(() => {
    if (selectedPostId) {
      const filteredComments = comments.filter(
        (comment) => comment.postId === selectedPostId
      );
      setSelectedPostComments(filteredComments.map(comment => comment.body));
    } else {
      setSelectedPostComments([]);
    }
  }, [selectedPostId, comments]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const uniquePostIds = Array.from(new Set(comments.map(comment => comment.postId)));

  useEffect(() => {
    setOpen(false);
    setCommentOpen(false); // Zatvaramo komentare kada se ponovno odabere dropdown
  }, [selectedPostId]);

  return (
    <>
      <Navigation />
      <div style={styles.dropdown} ref={dropdownRef}>
        <button onClick={handleOpen}>Dropdown</button>
        {open && (
          <ul style={styles.menu}>
            {uniquePostIds.map(postId => (
              <li key={postId} style={styles.li}>
                <button
                  onClick={() => {
                    setSelectedPostId(postId);
                  }}
                >
                  {postId}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedPostComments.length > 0 && !open && (
        <div style={styles.commentList}>
          <h3>Comments:</h3>
          <ul style={styles.commentList}>
            {selectedPostComments.map((comment, index) => (
              <li key={index} style={styles.li}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};


export default BlogScreen;
