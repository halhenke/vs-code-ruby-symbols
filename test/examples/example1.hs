{-# LANGUAGE OverloadedStrings #-}

module Example1 (
  fun1
  ) where

import Prelude

fun1 :: String -> IO ()
fun1 str = putStrLn str

data Weather = 
  Spring 
  | Summer
  | Autumn
  | Winter

type Dollar = Int

data Person = Citizen 
  {
    name :: String,
    age :: Int
  } 
  | VIP String deriving (Show)

data Poly a b = 
  First a b
  | Second a b