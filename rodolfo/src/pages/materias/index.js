import {TextButton, Container, List, Title, Input, Submit, Form, Texto} from './styles';

<List
    keyboardShouldPersistTaps="handled"
    data={repositories}
    keyExtrator={item => String(item.id)}
    // eslint-disable-next-line prettier/prettier
    renderItem={({item}) => (
    <Repository data={item} />
    )}
/>