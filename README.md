```js
client.api.channels("847172505260261449").messages.post({ data: {"content":"Aşağıdaki menüden kendinize oyun seçebilirsiniz. Bir oyunun rolünü almak için o butona tıklayın.","components":[{"type":1,"components":[

{"type":2,"style":2,"custom_id":"buttondc","label":"Doğruluk Cesaret"},
{"type":2,"style":4,"custom_id":"buttonvk","label":"Vampir Köylü"},
{"type":2,"style":3,"custom_id":"buttongartic","label":"Gartic"}

]}]} })
```
Bunun gibi bir eval ile kendinize buton oluşturabilir, "custom_id" olarak koyduğunuz yerden INTERACTION ile ilgili websoket eventi alabilirsiniz. 
