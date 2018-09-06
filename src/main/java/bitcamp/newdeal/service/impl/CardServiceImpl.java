package bitcamp.newdeal.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.newdeal.domain.Card;
import bitcamp.newdeal.repository.CardRepository;
import bitcamp.newdeal.service.CardService;

@Service
public class CardServiceImpl implements CardService{
    
    @Autowired
    CardRepository cardRepository;

    @Override
    public int add(Card card) {
        return cardRepository.insert(card);
    }

    @Override
    public List<Card> myCard(int no) {
    	System.out.println("서비스 임플 마이 카드 값 : " + no);
        return cardRepository.findByMemberNo(no);
    }

	@Override
	public List<Card> list(int no) {
		System.out.println("서비스 임플 출력 값  :" + no);
		return cardRepository.findCardByMemberNo(no);
	}

    
}
