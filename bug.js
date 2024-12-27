```javascript
const query = { name: 'John Doe' };

// Incorrect use of $in operator with a single element array
db.collection('users').find({ name: { $in: ['John Doe'] } }).toArray((err, result) => {
  console.log(result);
});
```