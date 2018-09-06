package bitcamp.newdeal.repository;

import java.util.List;

import bitcamp.newdeal.domain.Card;

public interface CardRepository {

    int insert(Card card);
    List<Card> findByMemberNo(int no);
	List<Card> findCardByMemberNo(int no);

}
