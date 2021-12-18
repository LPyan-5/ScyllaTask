import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/actions/users';
import Input from '../Input';

const Search = ({ users }) => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    
    const markMatches = useCallback((text) => {
        if (search) {
            const normReq = search
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim()
            .split(" ")
            .sort((a, b) => b.length - a.length);
            text = text.replace(
                new RegExp(`(${normReq.join("|")})`, "gi"),
                    (match) => "<mark>" + match + "</mark>"
            );
        }
        return text;
    }, [search]);

    const handleHighlight = useCallback(() => {
        let arr = [...users];
        arr.map((user, index) => {
            let highlighted = markMatches(`${user.name.first} ${user.name.last}`);
            arr.splice(index, 1, {...user, highlightedName: highlighted});
        });
        dispatch(actions.setUsers(arr));
    }, [users, markMatches]);

    useEffect(() => {
        handleHighlight();
    },[search, users.length]);

    return (
        <div>
          <Input type="text" placeholder="Search user name" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    );

}

export default Search;