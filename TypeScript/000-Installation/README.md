
# JS Environment

### prerequi

Node doit être installer 

```bash
node -v
// v20.10.0
```

### Installation 

```bash
npm add -D typescript ts-node tsconfig-paths @types/node
npm add -g typescript ts-node
```

```bash
npx tsc --init
```

### Update tsconfig.json
```json
{
    ...
    "ts-node": {
        "transpileOnly": false,
        "files": true,
        "require": ["tsconfig-paths/register"],
        "compilerOptions": { }
    }
}

