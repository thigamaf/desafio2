import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Iphone', desc: 'Apple 128GB Tela 6,1" camera 12MP IOS', price: 'R$5000' },
  { name: 'Galaxy S21', desc: '128GB 5G Wi-fi Tela 6,2" Dual Chip', price: 'R$3900' },
  { name: 'Ipad', desc: 'Apple 8 geração 32GB Tela 10,2" Wi-fi 3G', price: 'R$4500' },
  { name: 'Macbook', desc: 'AIR Apple M1 8GB 256GB SSD Tela 13"', price: 'R$9200' },
  { name: 'FRETE', desc: 'Até 5 dias úteis', price: 'R$20' },
];
const addresses = ['Av. Paulista, 1234', 'Centro', 'SP', '99999-000', 'Brasil'];
const payments = [
  { name: 'Tipo do Cartão', detail: 'Visa' },
  { name: 'Nome no Cartão', detail: 'Mr John Smith' },
  { name: 'Núm do Cartão', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Vencimento', detail: '04/2027' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumo do pedido:
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
          R$22620
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Endereço de entrega:
          </Typography>
          <Typography gutterBottom></Typography>
          <Typography gutterBottom>{addresses.join(' ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detalhes de pagamento:
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}