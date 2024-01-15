import { Button, Input, Icon } from "@ui5/webcomponents-react";


const SearchBar = ({query,setQuery, onSearch}) => {
  
  return <div> 
  <Input
  icon={<Icon name="employee" />}
  value={query}
  onChange={(e)=>{
    if(e.target.value){
      setQuery(()=>e.target.value)
    }
  }}
  onInput={function _a(){}}
  onSuggestionItemPreview={function _a(){}}
  onSuggestionItemSelect={function _a(){}}
/>
    <Button onClick={onSearch}> Search </Button>
    <Button> Reset </Button>
  </div>
}


export default SearchBar;