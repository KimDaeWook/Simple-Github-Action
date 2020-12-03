# Simple-Github-Action

Follow this at market place 👉 [<img src = "https://avatars0.githubusercontent.com/u/44036562?s=200&v=4" width= "40px">](https://github.com/marketplace/actions/simple-github-action)

#### Simply greet anyone by adding this action 😊
```
- uses: sukreshmanda/Simple-Github-Action@v1.0
  with:
   who-to-wish: "sukresh-manda"
  id: wish
```

### For taking output 
```
echo ${{ steps.<id>.outputs.statement}}
```
