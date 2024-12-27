```javascript
const query = { name: 'John Doe' };

// Correct approach for single element comparison
db.collection('users').find({ name: 'John Doe' }).toArray((err, result) => {
  console.log(result);
});
```