import React from 'react'
import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#555',
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16,
  },
}))

const Rightbar = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt='Remy Sharp'
          src='https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        />
        <Avatar
          alt='Travis Howard'
          src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        />
        <Avatar
          alt='Cindy Baker'
          src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        />
        <Avatar
          alt='Agnes Walker'
          src='https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        />
        <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
        <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList style={{ marginBottom: 20 }} cols={3} rowHeight={200}>
        <ImageListItem>
          <img
            src={`https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={
              'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
            alt='Flower'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={
              'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
            alt='Flower'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={
              'https://images.pexels.com/photos/8218387/pexels-photo-8218387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
            alt='Flower'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={
              'https://images.pexels.com/photos/1886694/pexels-photo-1886694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
            alt='Flower'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={
              'https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
            alt='Flower'
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categorys
      </Typography>
      <Link href='#' className={classes.link} variant='body2'>
        Sport
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Food
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Movies
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Astrology
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Music
      </Link>
      <Divider flexItem style={{ marginBottom: 10 }} />
      <Link href='#' className={classes.link} variant='body2'>
        Swimming
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Japan
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Netflix
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Animals
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Life
      </Link>
    </Container>
  )
}

export default Rightbar
