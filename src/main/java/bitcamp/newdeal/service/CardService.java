package bitcamp.newdeal.service;

import java.util.List;

import bitcamp.newdeal.domain.Card;

public interface CardService {

    int add(Card card);

    List<Card> myCard(int no);

	List<Card> list(int no);
    
}
