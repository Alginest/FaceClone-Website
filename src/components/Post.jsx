import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: '250px',
    [theme.breakpoints.down('sm')]: {
      height: '160px',
    },
  },
}))

const Post = () => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://thumbs.dreamstime.com/b/green-nature-banner-flower-water-drops-black-background-66151915.jpg'
          title='My Post'
        />

        <CardContent>
          <Typography variant='h5' gutterBottom>
            First Post
          </Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            debitis fuga nemo consequatur deserunt quaerat veritatis, illo
            laborum ad facilis doloribus necessitatibus eos dolore modi! Placeat
            vel voluptatum maiores dolore. illo laborum ad facilis doloribus
            necessitatibus eos dolore modi! Placeat vel voluptatum maiores
            dolore. illo laborum ad facilis doloribus necessitatibus eos dolore
            modi! Placeat vel voluptatum maiores dolore.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
