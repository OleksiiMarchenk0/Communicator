import React from 'react';

export default function MessageForm({message,handleSubmit,handleContentChange})
{
return(
<div>
  <form onSubmit={handleSubmit}>
    <input type="text" name="name"/>
    <input type="text" name="content"
    value={message}
    onChange={(event)=>handleContentChange(event.target.value)}/>
    <input type="submit" name="submit"/>
  </form>
</div>
)
}